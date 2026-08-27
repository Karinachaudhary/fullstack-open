const Hello =() => {
  return(
    <div>
      <p>Hello</p>
    </div>
  )
}
const App =() => {
  const name = 'Karina'
  const age =21
  return(
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
      {/* <Hello name='Karin' age={20+1} />
      <Hello name={name} age={age} /> */}
    </div>
  )
}
export default App