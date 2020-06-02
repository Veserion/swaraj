import React from 'react'
import styled from '@emotion/styled'
import { Table } from 'antd'
import { CurrentDropStore, IWearable } from '../../stores/CurrentDropStore'
import { inject, observer } from 'mobx-react'

interface IProps {
    currentDropStore?: CurrentDropStore
}

@inject('currentDropStore')
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
                dataIndex: 'releasePrice',
                key: 'releasePrice',
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
        ];
        return <Root>
            <Table dataSource={dataSource} columns={columns} />
        </Root>
    }
}

const Root = styled.div``