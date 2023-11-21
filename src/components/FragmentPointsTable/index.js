import "./styles.css";

const FragmentPointTable = (props) => {
    return(
        <table className="fragment-table">
            <thead>
                <tr>
                    <th>
                        <input type="text" placeholder="Insira a matrícula" />
                    </th>
                </tr>
            </thead>
            <tbody className="fragment-table-tbody">
                <tr>
                    <td>
                        <input type="radio" name="student" />
                        <span>Nome do aluno / matrícula</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="radio" name="student" />
                        <span>Nome do aluno / matrícula</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="radio" name="student" />
                        <span>Nome do aluno / matrícula</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="radio" name="student" />
                        <span>Nome do aluno / matrícula</span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default FragmentPointTable;