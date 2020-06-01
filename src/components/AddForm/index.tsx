import React from 'react';
import styled from '@emotion/styled'
import {Button,  Modal} from "antd";
import FormBody from "./FormBody";
import {FormInstance} from "antd/lib/form";

interface IProps {

}

interface IState {
    visible: boolean
}

class AddForm extends React.Component<IProps, IState> {
    state = {visible: true};

    formRef = React.createRef<FormInstance>();

    showModal = () => this.setState({visible: true});

    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return <Root>
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <FormBody formRef={this.formRef}/>
                </Modal>
            </div>

        </Root>
    }

}



const Root = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export default AddForm;
