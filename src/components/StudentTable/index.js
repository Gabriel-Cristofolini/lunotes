import "./styles.css";

import Delete from "../../assets/icon/delete.svg";

const StudentTable = () => {

    return (
        <table className="student-table">
            <thead>
                <tr>
                    <th>
                        <input type="text" placeholder="Insira a matrícula" />
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div>
                            <input type="checkbox" className="student-table-checkbox" />
                            <span>Nome do aluno / matrícula</span>
                        </div>
                        <img src={Delete} alt="Ícone de remover" className="student-table-delete" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <input type="checkbox" className="student-table-checkbox" />
                            <span>Nome do aluno / matrícula</span>
                        </div>
                        <img src={Delete} alt="Ícone de remover" className="student-table-delete" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <input type="checkbox" className="student-table-checkbox" />
                            <span>Nome do aluno / matrícula</span>
                        </div>
                        <img src={Delete} alt="Ícone de remover" className="student-table-delete" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default StudentTable;