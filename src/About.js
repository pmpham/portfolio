import React from 'react'
import { Card, CardHeader, CardContent } from 'ui-neumorphism'
import "./About.css"

const About = () => {
  return (
    <div>
      <Card className="about_card" inset={true} maxWidth={360}>
        Peter Pham
      </Card>
    </div>
  )
}

export default About