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
class MzManage extends Component{ 
     state={
         message:'您好',
         columns:columns,
         data:data
     }
  
     render(){
       
         return(
            <div className={styles.mzManage}>
               <section>
               省份：<Select mode="multiple"
                        style={{ width: '990px'}}
                        placeholder="select one country"
                        defaultValue={['上海市']}
                        onChange={this.handleChange}
                        optionLabelProp="label"
                     >
                  <Option value="sh" label="上海市">
                      <span role="img" aria-label="sh">上海市</span>
                  </Option>
                  <Option value="bj" label="北京市">
                      <span role="img" aria-label="bj">北京市</span>
                  </Option>
                  <Option value="fj" label="福建省">
                      <span role="img" aria-label="fj">福建省</span>
                  </Option>
                  <Option value="zj" label="浙江省">
                      <span role="img" aria-label="zj">浙江省</span>
                  </Option>
               </Select>
               </section>
               <section>
                 <span className={styles.item}>视频ID：<Input placeholder="请输入视频ID" allowClear onChange={this.handleInput} className={styles.inputModule}/></span>
                 <span className={styles.item}>视频名称：<Input placeholder="请输入视频名称" allowClear onChange={this.handleInput} className={styles.inputModule}/></span>
                 <span className={styles.item}>公司名称：<Input placeholder="请输入公司名称" allowClear onChange={this.handleInput} className={styles.inputModule}/></span>
               </section>
               <section>
                 <span className={styles.item}>
                     注入状态：
                     <Select showSearch style={{ width: '23%' }} placeholder="选择注入状态" className={styles.inputModule}>
                     <Option value="1">全部</Option>
                     <Option value="2">未注入</Option>
                     <Option value="3">注入成功</Option>
                     <Option value="4">注入中</Option>
                     <Option value="5">注入失败</Option>
                     </Select>
                 </span>
                 <span className={styles.item}>储存状态：
                 <Select showSearch style={{ width: '23%' }} placeholder="选择储存状态" className={styles.inputModule}>
                     <Option value="1">全部</Option>
                     <Option value="2">未储存</Option>
                     <Option value="3">储存中</Option>
                     <Option value="4">储存成功</Option>
                     <Option value="5">储存失败</Option>
                     <Option value="5">已移除</Option>
                     </Select>
                 </span>
                 <span className={styles.item}>
                     创建时间：
                     <DatePicker showSearch onChange={this.selectDate} placeholder="选择日期" className={styles.inputModule}/>
                 </span>
               </section>
               {/*操作按钮 */}
               <main>
               <div style={{paddingBottom:'10PX'}}>
               <Button type="primary" size={'default'} style={{marginRight:'15px'}}>搜索</Button>
               <Button type="default" size={'default'}>重置</Button>
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

export default MzManage;