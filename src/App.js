import styled from "styled-components";
import { Formik, Form } from "formik";
import { useState } from "react";
import Input from './components/Input';
import Button from './components/Button';
import Result from './components/Result';

const initialValues = {
  initialMount: "",
  anualMount: "",
  numberOfYears: "",
  percent: ""
}

const CONTAINER = styled.div`
width: 90%;
max-width: 700px;
margin: 100px auto;
text-align: center;
@media (max-width: 600px) {
  font-size: 17px;
}
@media (min-width: 600px) and (max-width: 1000px) {
  font-size: 20px;
}
font-size: 23px;
`

const FORMSTYLED = styled(Form)`
  margin: 0 auto;
  padding: 20px;
  margin-top: 50px;
  width: calc(100% - 40px);
  border-radius: 10px 10px 0 0;
  background-color: #7986CB;
  
`

const App = () => {

  const [totalValue, setTotalValue] = useState(0)

  return (
    <CONTAINER>
      <h1>Compount Interest Calculator</h1>
      <Formik initialValues={initialValues}
        onSubmit={
          values => {
            const calcTotal = () => {
              let total = values.initialMount
              for (var i = 0; i < values.numberOfYears; i++) {
                total = ( total + values.anualMount ) * (1 + values.percent / 100)
              }
              return total
            }
            let total = Math.round(calcTotal())
            function format(input) {
              input = String(input)
              var num = input.replace(/\./g,'');
              num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
              num = num.split('').reverse().join('').replace(/^[.]/,'');
              return num
            }
 
            total = format(total)
            

            setTotalValue(total)
          }
        }
      >
        <FORMSTYLED>
          <Input label="Initial Investment" type="number" name="initialMount" placeholder="In €" min="0" />
          <Input label="Anual Investment" type="number" name="anualMount" placeholder="In €" min="0"/>
          <Input label="Number of Years" type="number" name="numberOfYears" placeholder="How many years?" min="0" />
          <Input label="Rate percent" type="number" name="percent" placeholder="In %"min="0" />
          <Button type="submit" >Show my money</Button>
        </FORMSTYLED>
      </Formik>
      <Result totalValue={totalValue} />
    </CONTAINER>
  )  
}

export default App;