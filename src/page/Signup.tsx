import React from 'react';
import Layout from 'src/layout/default';
import {Modal} from 'src/layout/Modals';
import styled from 'styled-components';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    Input,
    Container
} from 'reactstrap';
import { Form, FormItemProps } from 'antd';
import { useStore } from 'src/contexts/globalContext';
import { signup } from 'src/api';
import { useHistory } from 'react-router';

const ContainerStyled = styled(Container)`
    padding-top:5rem;
    padding-bottom:5rem;
    height:100%;
    max-width: 600px;
    color:var(--color-text-primary);
`;

const CardTitleStyled = styled(CardTitle)`
    &&& {
        color: var(--color-text-primary);
        margin-left: 1.5rem;
    }
`;

const FormItemStyeld = styled(Form.Item)`
    &{
        display:flex;
        flex-direction:column;

        .ant-form-item-label > label{
            color:var(--color-text-primary);
        }
        >*{
            text-align: left;
        }
    }
`;

export default function Signup() {
    const history = useHistory();
    const [ form ] = Form.useForm();
    const { setIsLoading } = useStore();
    const [ isDone, setIsDone ] = React.useState(false);
    const [ formItemAttr ] = React.useState<{[key:string]:FormItemProps}>({
        username: {
            name: 'username',
            label: 'username',
            colon: false,
            validateFirst: true,
            rules: [
                {
                    required: true,
                    message: 'please input username'
                },
                {
                    min: 5,
                    message: 'at least 5 charaters'
                }
            ]
        },
        password: {
            name: 'password',
            label: 'password',
            colon: false,
            validateFirst: true,
            rules: [
                {
                    required: true,
                    message: 'please input password'
                },
                {
                    min: 8,
                    max: 12,
                    message: 'only accept 8 ~ 12 charaters'
                }
            ]
        },
        recheckPassword: {
            name: 'recheckPassword',
            label: 'recheck password',
            colon: false,
            validateFirst: true,
            rules: [
                {
                    required: true,
                    message: 'please input password'
                },
                {
                    min: 8,
                    max: 12,
                    message: 'only accept 8 ~ 12 charaters'
                },
                {
                    validator: async (_, val) => {
                        if(form.getFieldValue('password') !== val) {
                            throw('recheckPassword error');
                        }
                    },
                    message: 'incorrect password check'
                }
            ]
        }

    });

    const onSubmit = async () => {
        try{
            setIsLoading(true);

            let fileds;

            try{
                fileds = await form.validateFields();
            }catch(e) {
                throw(new Error('validation fail'));
            }

            const {data} = await signup(fileds);

            Modal.success({
                content: `register successfully , ${data.username} `,
                okText: 'login right now',
                onOk: () => {
                    history.push('/signin');
                }
            });

        }catch(e) {
            console.error(e);
            if(e instanceof Error) {
                Modal.error({content: `unexcept error : ${e.message}`});
            }
        }finally{
            setIsLoading(false);
        }
    };

    return (
        <Layout>
            <Layout.Content>
                <ContainerStyled>
                    <Card className="card-register">
                        <CardHeader>
                            <CardImg
                                src={require('blk-design-system-react/src/assets/img/square1.png')}
                            />
                            <CardTitleStyled tag="h4">SignUp</CardTitleStyled>
                        </CardHeader>
                        <CardBody>
                            <Form
                                form={form}
                                validateTrigger={false}
                                scrollToFirstError={true}
                                initialValues={
                                    Object.fromEntries(Object.keys(formItemAttr).map(k => [k, '']))
                                }
                                onValuesChange={
                                    (curVal, allVals) => {
                                        console.log('[onValuesChange curVal]', curVal);
                                        // console.log("[onValuesChange allVals]" , allVals)
                                        setIsDone(!Object.keys(allVals).some(k => !allVals[k]));
                                    }
                                }
                            >
                                <FormItemStyeld {...formItemAttr['username']}>
                                    <Input
                                        placeholder="username"
                                        type="text"
                                    />
                                </FormItemStyeld>
                                <FormItemStyeld {...formItemAttr['password']}>
                                    <Input
                                        placeholder="password"
                                        type="password"
                                    />
                                </FormItemStyeld>
                                <FormItemStyeld {...formItemAttr['recheckPassword']}>
                                    <Input
                                        placeholder="recheck your password"
                                        type="password"
                                    />
                                </FormItemStyeld>

                                {/* <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    terms and conditions
                                </a> */}

                            </Form>
                        </CardBody>
                        <CardFooter style={{textAlign: 'center'}}>
                            <Button
                                className="btn-round"
                                color="info"
                                size="lg"
                                onClick={() => onSubmit()}
                                disabled={!isDone}
                            >
                                OK
                            </Button>
                        </CardFooter>
                    </Card>
                </ContainerStyled>
            </Layout.Content>
        </Layout>
    );
}