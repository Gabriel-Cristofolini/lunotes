import { useState } from "react";
import { createContext } from "react";

const [data, setData] = useState(null);

const TestContext = createContext(data, setData);

export default TestContext;