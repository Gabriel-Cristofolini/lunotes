import "./styles.css";

const GradeTable = () => {

    return (
        <table className="grade-table">
            <thead>
                <tr>
                    <th>Alunos</th>
                    <th>Notas</th>
                    <th>Fragmentos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <span>
                            Nome do aluno / matrícula
                        </span>
                    </td>
                    <td><input type="text" min="0" max="10" placeholder="00.00"></input></td>
                    <td>10.0</td>
                </tr>
                <tr>
                    <td>
                        <span>
                            Nome do aluno / matrícula
                        </span>
                    </td>
                    <td><input type="text" min="0" max="10" placeholder="00.00"></input></td>
                    <td>10.0</td>
                </tr>
                <tr>
                    <td>
                        <span>
                            Nome do aluno / matrícula
                        </span>
                    </td>
                    <td><input type="text" min="0" max="10" placeholder="00.00"></input></td>
                    <td>10.0</td>
                </tr>
                <tr>
                    <td>
                        <span>
                            Nome do aluno / matrícula
                        </span>
                    </td>
                    <td><input type="text" min="0" max="10" placeholder="00.00"></input></td>
                    <td>10.0</td>
                </tr>
                <tr>
                    <td>
                        <span>
                            Nome do aluno / matrícula
                        </span>
                    </td>
                    <td><input type="text" min="0" max="10" placeholder="00.00"></input></td>
                    <td>10.0</td>
                </tr>
                <tr>
                    <td>
                        <span>
                            Nome do aluno / matrícula
                        </span>
                    </td>
                    <td><input type="number" placeholder="00.00"></input></td>
                    <td>10.0</td>
                </tr>
            </tbody>
        </table>
    );
};

export default GradeTable;