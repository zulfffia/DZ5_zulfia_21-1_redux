import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addInput, clearInput} from "../redux/actions";

const InfoData = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const {list} = useSelector(state => state.infoReducer)

    const inputAdd = () => {
        dispatch(addInput(input))
        setInput('')
    }

    const onChange = ({target}) => {
        setInput(target.value)
    }
    const clear = () => {
        dispatch(clearInput())
    }
    return (
        <div style={{background:"black", color:"white"}}>
            <input type="text" value={input} onChange={onChange}/>
            <button onClick={inputAdd}>add</button>
            <button onClick={clear}>clear</button>
            <ul style={{listStyle: "none"}}>
                {
                    list.map((e,k)=> <li key={k}>{e}</li>)
                }
            </ul>
        </div>
    );
};

export default InfoData;