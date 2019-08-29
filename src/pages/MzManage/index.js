import React, {Component} from 'react';
import {Select,Input,DatePicker,Button} from 'antd';

const {Option}=Select;
class MzManage extends Component{ 
 
     state={
         message:'您好'
     }
     render(){
       
         return(
            <div>
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
                 <span>视频ID：<Input placeholder="请输入视频ID" allowClear onChange={this.handleInput} style={{width:'23%'}}/></span>
                 <span>视频名称：<Input placeholder="请输入视频名称" allowClear onChange={this.handleInput} style={{width:'23%'}}/></span>
                 <span>公司名称：<Input placeholder="请输入公司名称" allowClear onChange={this.handleInput} style={{width:'23%'}}/></span>
               </section>
               <section>
                 <span>
                     注入状态：
                     <Select showSearch style={{ width: '23%' }} placeholder="选择注入状态">
                     <Option value="1">全部</Option>
                     <Option value="2">未注入</Option>
                     <Option value="3">注入成功</Option>
                     <Option value="4">注入中</Option>
                     <Option value="5">注入失败</Option>
                     </Select>
                 </span>
                 <span>储存状态：
                 <Select showSearch style={{ width: '23%' }} placeholder="选择储存状态">
                     <Option value="1">全部</Option>
                     <Option value="2">未储存</Option>
                     <Option value="3">储存中</Option>
                     <Option value="4">储存成功</Option>
                     <Option value="5">储存失败</Option>
                     <Option value="5">已移除</Option>
                     </Select>
                 </span>
                 <span>创建时间：<DatePicker showSearch onChange={this.selectDate} placeholder="选择日期" /></span>
               </section>
               {/*操作按钮 */}
               <div>
               <Button type="primary" size={'default'}>搜索</Button>
               <Button type="default" size={'default'}>重置</Button>
               <Button type="primary" icon="database" size={'default'} />
               <Button type="primary" icon="copy" size={'default'} />
               <Button type="primary" icon="download" size={'default'} />
               </div>
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