import React, {Component} from 'react';
import {Select,Input,DatePicker,Button} from 'antd';
import {Table,Tag,Divider} from 'antd';
import {Pagination} from 'antd';
import styles from './index.module.css';
const {Option}=Select;
const columns=[
    { 
        title:'姓名',
        dataIndex:'name',
        key:'name',
        render:text=><a>{text}</a>
    },
    {
        title:'年龄',
        dataIndex:'age',
        key:'age'
    },
    {
        title:'地址',
        dataIndex:'address',
        key:'address'
    },
    {
        title:'标签',
        dataIndex:'tags',
        key:'tags',
        render: tags=>(<span>
            {
                tags.map(tag=>{
                    let color=tag==='loser'?'volcano':(tag.length>5?'geekblue':'green');
                    return (
                        <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>
                    )
                })
            }
        </span>)
    },
    {
        title:'操作',
        key:'action',
        render:(text,record)=>(
            <span>
                <a>Invite {record.name}</a>
                <Divider type='vertical'/>
                <a>删除</a>
            </span>
        )
    }
]
const data=[
    {
        key:'1',
        name:'孙达',
        age:28,
        address:'张江狂梦科技',
        tags:['hashiqi','machu']
    },
    {
        key:'2',
        name:'李旭明',
        age:28,
        address:'张江狂梦科技',
        tags:['hashiqi','machu']
    }
]
class CpManage extends Component{ 
     state={
         message:'您好',
         columns:columns,
         data:data
     }
  
     render(){
       
         return(
            <div className={styles.cp}>
               <section>
               <span className={styles.item}>所属公司：
               <Select showSearch className={styles.inputModule}
                    placeholder="请选择所属公司"
                    optionFilterProp=""
                    filterOption={(input, option) =>
                     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    <Option value="jack">全部</Option>
                    <Option value="lucy">科大讯飞</Option>
                    <Option value="tom">京东</Option>
                </Select>
               </span>
               <span className={styles.item}>视频ID：<Input placeholder="请输入视频ID" allowClear onChange={this.handleInput} className={styles.inputModule}/></span>
               <Button type="primary" size={'default'} style={{marginRight:'15px'}}>搜索</Button>
               <Button type="default" size={'default'}>重置</Button>
               </section>
               {/*操作按钮 */}
               <main>
               <div style={{paddingBottom:'10PX',height:'42px'}}>
               <div style={{float:'right'}}>
               <Button type="primary" icon="database" size={'default'} style={{marginRight:'10px'}}/>
               <Button type="primary" icon="copy" size={'default'} style={{marginRight:'10px'}}/>
               <Button type="primary" icon="download" size={'default'}/>
               </div>
               </div>
               <Table columns={this.state.columns} dataSource={this.state.data} pagination={false}></Table>
               </main>
               <Pagination total={50} showSizeChanger showQuickJumper pageSizeOptions={['10','20','50','100']} style={{marginTop:'20px'}}/>
            </div>
         )
     }
    handleChange(value){
         console.log('选择的城市-----',value);
    }
    handleInput(value){
        console.log('输入的值----',value);
    }
    selectDate(value){
        console.log('输入日期----',value);
    }
}

export default CpManage;