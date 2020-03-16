import React from 'react'

const redirectGitHub = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
  const url = 'https://github.com/Ciavarella'
  window.location.href = url
}

const redirectLinkedin = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
  const url = 'https://www.linkedin.com/in/victor-ciavarella-7a4162142/'
  window.location.href = url
}

const Footer: React.FC = () => {
  return (
    <div className="footer align-center">
      <img className="img" title="Github" alt="Github Link" id="github" onClick={redirectGitHub} src="https://1000logos.net/wp-content/uploads/2018/08/GitHub-Logo.png" />
      <img className="img" title="LinkeIn" alt="LinkedIn link" id="linkedin" onClick={redirectLinkedin} src="https://image.flaticon.com/icons/svg/38/38669.svg" />
    </div>
  )
}

export default Footer