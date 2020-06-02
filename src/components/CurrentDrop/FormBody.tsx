import React from 'react'
import styled from '@emotion/styled'
import { Form, Input, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';
import SizedBox from "../SizedBox";
import { inject, observer } from 'mobx-react'
import { CurrentDropStore, IWearable } from '../../stores/CurrentDropStore'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Root = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
.ant-form {
    width: 98%;
    margin-right: 15%;
}
`


interface IProps {
    currentDropStore?: CurrentDropStore
    // onSubmit: (values: any) => void
}

@inject('currentDropStore')
@observer
export default class FormBody extends React.Component<IProps> {
    formRef = React.createRef<FormInstance>();

    onFill = () => {
        this.formRef.current!.setFieldsValue({
            article: 'test data',
            quantityIssued: 2,
            materials: 'test data',
            designer: 'test data',
            releasePrice: 1000,
            description: 'test data',
            picture: 'test data',
        });
    };

    onSubmit = (wear: IWearable) => {
        this.props.currentDropStore?.addWear(wear)
    }

    render() {
        const index = this.props.currentDropStore?.currentDrop.length || 0
        return (
            <Root>
                <Form {...layout} ref={this.formRef} name="control-ref"
                    onFinish={values => this.onSubmit({ ...values, id: index.toString() } as IWearable)}>
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
                    <Form.Item name="releasePrice" label="Release price" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="picture" label="Picture" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
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

