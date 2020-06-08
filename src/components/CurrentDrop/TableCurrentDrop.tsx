import React from 'react'
import styled from '@emotion/styled'
import { Table, Button, Space } from 'antd'
import { CurrentDropStore, IWearable } from '../../stores/CurrentDropStore'
import { inject, observer } from 'mobx-react'
import { DataStore } from '../../stores/DataStore'
import { FormInstance } from 'antd/lib/form'
// import { access } from 'fs'
// import { values } from 'mobx'

interface IProps {
    currentDropStore?: CurrentDropStore
    dataStore?: DataStore
    formRef: React.RefObject<FormInstance>
}

@inject('currentDropStore', 'dataStore')
@observer
export default class TableCurrentDrop extends React.Component<IProps> {
    render() {
        let dataSource: IWearable[] = []
        if (this.props.currentDropStore?.currentDrop) {
            dataSource = this.props.currentDropStore?.currentDrop
                .reduce((acc: IWearable[], wear: IWearable, index: number) => ([...acc, { ...wear, key: index }]), [])
        }

        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'Article',
                dataIndex: 'article',
                key: 'article',
            },
            {
                title: 'Quantity issued',
                dataIndex: 'quantityIssued',
                key: 'quantityIssued',
            },
            {
                title: 'Materials',
                dataIndex: 'materials',
                key: 'materials',
            },
            {
                title: 'Designer',
                dataIndex: 'designer',
                key: 'designer',
            },
            {
                title: 'Release price',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: 'Picture',
                dataIndex: 'picture',
                key: 'picture',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text: string, record: IWearable) => (
                    <Space size="middle">
                        <a onClick={() => this.props.currentDropStore?.deleteWear(record.id)}>
                            Delete
                        </a>
                        <a onClick={() => {
                            this.props.formRef.current!.setFieldsValue(
                                this.props.currentDropStore?.currentDrop!.find(item => item.id === record.id)!
                            )
                            this.props.currentDropStore?.setCurrentWearId(record.id)
                        }}>
                            Change
                        </a>
                    </Space>
                ),
            },
        ];
        return <Root>
            <Table dataSource={dataSource} columns={columns} />
            <ButtonPush onClick={() => {
                this.props.dataStore?.
                    addDrop(this.props.currentDropStore?.currentDrop!.
                        reduce((acc, value) => ({ ...acc, [value.id]: value }), {}))
                this.props.currentDropStore?.clear()
            }}>
                Push Drop
            </ButtonPush>
        </Root>
    }
}

const Root = styled.div``

const ButtonPush = styled.span`
display: flex;
justify-content: center;
align-items: center;
width: auto;
background: #1890FF;
border: none;
color: white;
padding: 7px 15px;
border-radius: 2px;
cursor: pointer;
`

