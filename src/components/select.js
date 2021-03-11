import React, {useState, useEffect} from 'react'
import { Select, } from "antd";
import axios from "axios";
import useSessionStorage from '../hook/useSessionStorage'
const SelectBox = () => {
    const { Option } = Select;
    const [data, setData] = useState([])
    const [service, setService] = useState([])
    const [serviceStorage, setServiceStorage] = useSessionStorage("serviceStorage")
    let instance = []
    const onChange = (val) => {
        console.log(`selected ${val}`);
    }

    const onBlur = () => {
        console.log('blur');
    }

    const onFocus = () => {
        console.log('focus');
    }

    const onSearch = (val) => {
        console.log('search:', val);
    }

    const onSelectService = (val) => {
        const apiServiceUrl = `http://localhost/api/v1/instances/${val}`
        
        axios.get(apiServiceUrl)
            .then((res) => {                      
                    
                  for (const [key, value] of Object.entries(res.data)) {
                    instance.push({'key': key, 'value': value})
                  }        
                console.log(instance)
                setService(instance)  
                setServiceStorage(instance)
          })
    }

    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = () => {
        const apiUrl = "http://localhost/api/v1/services"
        axios.get(apiUrl)
            .then((res) => {               
                setData(res.data)             
                console.log('first: ',res.data)
          })
    }
    
    return (
        <>
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select service"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelectService}
            onSearch={onSearch}
            filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }>
            {data.map(item => <Option key={item}>{item}</Option>)}
            </Select>
            <br /><br />
            <Select
            style={{ width: 200 }}
            placeholder="Select instance"
            optionFilterProp="children">
            {service.map(item => <Option key={item.key}>{item.value}</Option>)}
            </Select>
        </>
    )
}

export default SelectBox
