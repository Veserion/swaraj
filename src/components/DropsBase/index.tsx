/**jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { inject, observer } from 'mobx-react';
import { SwitchScreenStore } from '../../stores'
import { DataStore } from '../../stores'
import { Table } from 'antd'
import ReactLoaderSpinner from 'react-loader-spinner'

interface IProps {
    switchScreenStore?: SwitchScreenStore
    dataStore?: DataStore
}

@inject('switchScreenStore', 'dataStore')
@observer
export default class DropsBase extends React.Component<IProps> {
    render() {
        const { drops } = this.props.dataStore!;
        let classHidden = ''
        if (this.props.switchScreenStore!.openScreen !== 'Drops') {
            classHidden = 'hidden'
        }

        const data: Array<any> = Object.entries(drops)
            .map(([id, value]) => ({ key: id, id, numberOfThings: Object.keys(value).length }))

        return data.length
            ? <Root>
                <Wrapper className={classHidden}>
                    <Table
                        columns={columns}
                        expandable={{
                            expandedRowRender: record => <Table
                                columns={dropInfoColumns}
                                dataSource={Object.entries(drops[record.id] || {}).map(([id, v]) => ({ ...v, id, key: id }))}
                            />,
                            rowExpandable: record => record.dropInfo.length !== 0,
                        }}
                        dataSource={data}
                    />
                </Wrapper>
            </Root>
            : <Loader />
    }
}

const Loader = () => <div css={css` margin: 17% auto; `}>
    <ReactLoaderSpinner type="TailSpin" color="#00BFFF" height={100} width={100} />
</div>

const Root = styled.div`
width: 100%;
margin-left: 100px;
.hidden {
    display: none;
}
`

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
`


const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Number of things', dataIndex: 'numberOfThings', key: 'numberOfThings' },
];
const dropInfoColumns = [
    { title: 'ID', dataIndex: 'id', key: 'id', },
    { title: 'Article', dataIndex: 'article', key: 'article', },
    { title: 'Quantity issued', dataIndex: 'quantityIssued', key: 'quantityIssued', },
    { title: 'Materials', dataIndex: 'materials', key: 'materials', },
    { title: 'Designer', dataIndex: 'designer', key: 'designer', },
    { title: 'Release price', dataIndex: 'releasePrice', key: 'releasePrice', },
    { title: 'Description', dataIndex: 'description', key: 'description', },
    { title: 'Picture', dataIndex: 'picture', key: 'picture' },
];
