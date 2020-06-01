import React from 'react';
import styled from '@emotion/styled'
import {Button,  Modal} from "antd";
import FormBody from "./FormBody";

interface IProps {

}

interface IState {
    visible: boolean
}

class AddForm extends React.Component<IProps, IState> {
    state = {visible: false};

    showModal = () => this.setState({visible: true});

    handleOk = (e: any) => {
        console.log(e);
        this.setState({
            visible: false
        });
    };

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
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <FormBody/>
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
height: 100vh;
width: 100vw;
`

export default AddForm;
