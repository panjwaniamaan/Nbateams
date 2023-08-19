const Main = (props) => {
  const { logo } = props.main
  console.log(props.main)
  return (
    <div className="logo">
      <img
        src={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/${logo}`}
        alt={`${team} logo`}
      />
    </div>
  )
}

export default Main
