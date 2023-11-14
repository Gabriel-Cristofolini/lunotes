import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Parser from "html-react-parser";

import "./styles.css";

import Conclude from "../../assets/icon/conclude.svg";
import Cancel from "../../assets/icon/cancel.svg";

const TextEdition = (props) => {

    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (props.title === "Adicionar conteúdo" || props.title === "Editar conteúdo") {
            props.setContent(text);
            props.setView(false);
        } else if (props.title === "Adicionar anotação" || props.title === "Editar anotação") {
            props.setAnnotation(text);
            props.setView(false);
        } else { return }
    }

    console.log(props.title)

    const modules = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike', 'blockquote', { 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }, 'link', 'clean', { 'align': [] },],
            ]
        },
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'align'
    ]



    return (
        <div className="text-edition">
            <div className="text-edition-background" />
            <div className="text-edition-content">
                <div className="text-edition-content-operations">
                    <img src={Conclude} alt="Ícone de conclusão" onClick={handleSubmit} />
                    <img src={Cancel} alt="Ícone de cancelamento" onClick={()=>{props.setView(false)}} />
                </div>
                <span className="text-edition-content-title">{props.title}</span>
                <div className="text-edition-content-box">
                    <ReactQuill
                        theme='snow'
                        modules={modules}
                        formats={formats}
                        onChange={(e) => setText(e)}
                    />
                </div>
            </div>
        </div>
    );
};

export default TextEdition;