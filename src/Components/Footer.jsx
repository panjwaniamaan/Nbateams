const Footer = (props) => {
  const { team, draftpick } = props.footer
  return (
    <footer>
      The {team} drafted {draftpick} in 2023!
    </footer>
  )
}

export default Footer
