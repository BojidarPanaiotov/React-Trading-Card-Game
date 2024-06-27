const Banner: React.FC<{ url: string }> = ({ url }) => {
  const style = {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '-1'
  }

  return <div style={style}></div>
}

export default Banner
