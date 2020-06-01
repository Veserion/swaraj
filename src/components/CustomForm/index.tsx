import React from 'react'
import styled from '@emotion/styled'
import { Form, Input, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';
import 'antd/dist/antd.css';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


export default class CustomForm extends React.Component {
    formRef = React.createRef<FormInstance>();

    onGenderChange = (value: any) => {
        this.formRef.current!.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    onFinish = (values: any) => {

    };

    onReset = () => {
        this.formRef.current!.resetFields();
    };

    onFill = () => {
        this.formRef.current!.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };

    render() {
        return (
            <Root>
                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                    <Form.Item name="article" label="Article" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="quantityIssued" label="Quantity issued" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="materials" label="Materials" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="designer" label="Designer" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="release price" label="Release price" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="picture" label="Picture" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                    >
                        {({ getFieldValue }) => {
                            return getFieldValue('gender') === 'other' ? (
                                <Form.Item
                                    name="customizeGender"
                                    label="Customize Gender"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            ) : null;
                        }}
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
          </Button>
                        <Button htmlType="button" onClick={this.onReset}>
                            Reset
          </Button>
                        <Button type="link" htmlType="button" onClick={this.onFill}>
                            Fill form
          </Button>
                    </Form.Item>
                </Form>
            </Root>
        );
    }
}

const Root = styled.div`
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
.ant-form {
    width: 50%;
    margin-right: 15%;
}
`