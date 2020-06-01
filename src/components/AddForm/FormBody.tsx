import React from 'react'
import styled from '@emotion/styled'
import {Form, Input, Button} from 'antd';
import {FormInstance} from 'antd/lib/form';

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

const Root = styled.div`
display: flex;
justify-content: center;
align-items: center;
.ant-form {
    width: 98%;
    margin-right: 15%;
}
`

export default class FormBody extends React.Component<{formRef:  React.RefObject<FormInstance>}> {

    onFinish = (values: any) => {

    };

    render() {
        return (
            <Root>
                <Form {...layout} ref={this.props.formRef} name="control-ref" onFinish={this.onFinish}>
                    <Form.Item name="article" label="Article" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="quantityIssued" label="Quantity issued" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="materials" label="Materials" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="designer" label="Designer" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="release price" label="Release price" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="picture" label="Picture" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                    >
                        {({getFieldValue}) => {
                            return getFieldValue('gender') === 'other' ? (
                                <Form.Item
                                    name="customizeGender"
                                    label="Customize Gender"
                                    rules={[{required: true}]}
                                >
                                    <Input/>
                                </Form.Item>
                            ) : null;
                        }}
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button style={{width: '100%'}} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Root>
        );
    }
}

