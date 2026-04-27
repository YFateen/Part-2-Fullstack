const Course = ({course}) => 
{
    const {parts, name} = course;

  return (
    <div>
      <Header course={name} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Content = ({parts}) => {
    const MappedParts = parts.map(part => <Part key={part.id} part = {part}/>)

    return (
      <div>
      {MappedParts}
      </div>
      )
}

const Part = ({part}) => {
  console.log("Help",part)
  return (<p>{part.name} {part.exercises}</p>)
}

const Total = ({parts}) => {
    const totalCount = 0;
    const total = parts.reduce((s,p) => {
        console.log('what is happening', s,p)
        return s + p.exercises
    },totalCount)

  return (<p> <b> total of {total} exercises </b> </p>)
}


export default Course