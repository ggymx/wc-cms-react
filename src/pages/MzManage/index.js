import React, {Component} from 'react';
import {Select,Input,DatePicker,Button} from 'antd';
import {Table,Tag,Divider} from 'antd';
import {Pagination} from 'antd';
import styles from './index.module.css';
import axios from '../../request';
const {Option}=Select;
let data,columns;
class MzManage extends Component{ 
     componentWillMount(){
         console.log('组件将被挂载-----');  
         axios.get('http://rap2api.taobao.org/app/mock/225049/mzManage',{
            params:{
                cursor:1
            }
        }).then(res=>{
            console.log('成功',res);  
             data=res.mzArr.map(item=>({...item,key:item.ID}));
             columns=res.mzTree.map(({prop,label})=>({  
                 title:label,
                 dataIndex:prop,
                 key:prop
                 }));
             //接收到数据时重新渲染
             this.setState({
                 data,
                 columns
             });
            console.log('data-------',data);
            console.log('columns-----',columns);
        }).catch(err=>{
            console.log('异常信息----',err);
        });
       
     }
     constructor(props) {
         super(props);
         this.state={
            message:'您好',
            columns:columns,
            data:data
        }
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