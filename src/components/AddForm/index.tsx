/**jsx*/
import React from 'react';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Button, Modal } from "antd";
import FormBody from "./FormBody";
// import {FormInstance} from "antd/lib/form";
// import {values} from "mobx";
import { inject, observer } from 'mobx-react';
import { SwitchScreenStore } from '../../stores'

interface IProps {
    switchScreenStore?: SwitchScreenStore
}

interface IState {
    visible: boolean
}
@inject('switchScreenStore')
@observer
class AddForm extends React.Component<IProps, IState> {
    state = { visible: false };

    showModal = () => this.setState({ visible: true });

    handleCancel = () => this.setState({ visible: false });

    handleSubmit = (values: any) => {
        console.log(values);

    }

    render() {
        return <Root css={this.props.switchScreenStore!.openScreen === 'Drops'
            ? css`
                display: none;`
            : css``
        }>
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="New drop"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <FormBody onSubmit={this.handleSubmit} />
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
