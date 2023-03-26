import React from 'react'
import './single.scss'

function Single() {
  return (
    <div className="single">
      <div className="article-container">
        <div className='article-image-container'>
          <img src='https://github.blog/wp-content/uploads/2020/03/github-npm-blog.png?resize=1600%2C850' alt="" className='article-image'/>
        </div>
        <div className='article-content'>
        <h1>lois polos gas</h1>
        <p>
        I’m excited to announce that GitHub has signed an agreement to acquire npm.

npm is a critical part of the JavaScript world. The work of the npm team over the last 10 years, and the contributions of hundreds of thousands of open source developers and maintainers, have made npm home to over 1.3 million packages with 75 billion downloads a month. Together, they’ve helped JavaScript become the largest developer ecosystem in the world. We at GitHub are honored to be part of the next chapter of npm’s story and to help npm continue to scale to meet the needs of the fast-growing JavaScript community. 

For the millions of developers who use the public npm registry every day, npm will always be available and always be free. Our focus after the deal closes will be to:

Invest in the registry infrastructure and platform. The JavaScript ecosystem is massive and growing quickly. It needs a rock-solid registry. We will make the investments necessary to ensure that npm is fast, reliable, and scalable.
Improve the core experience. We will work to improve the everyday experience of developers and maintainers, and support the great work already started on the npm v7 CLI, which will remain free and open source. Some bigger features that we’re excited about are Workspaces and improvements to the publishing and multi-factor authentication experience. 
Engage with the community. We will actively engage with the JavaScript community to get your ideas and help us define the future of npm.
Looking further ahead, we’ll integrate GitHub and npm to improve the security of the open source software supply chain, and enable you to trace a change from a GitHub pull request to the npm package version that fixed it. Open source security is an important global issue, and with the recent launch of the GitHub Security Lab and GitHub’s built-in security advisories, we are well-positioned to make a difference. In addition, GitHub Sponsors has already paid out millions of dollars to open source contributors, and we’re excited to explore tasteful ways to extend it to the npm ecosystem.

For paying customers who use npm Pro, Teams, and Enterprise to host private registries, we will continue to support you. We are also investing heavily in GitHub Packages as a great multi-language packages registry that’s fully integrated with GitHub. Later this year, we will enable npm’s paying customers to move their private npm packages to GitHub Packages—allowing npm to exclusively focus on being a great public registry for JavaScript.

We also welcome your ideas on the future of npm. We’ll be hosting a Reddit AMA with some of the people on the team in the coming days.

The amazing energy and creativity of millions of JavaScript developers is evident every day in the work that appears in npm. We are honored to support that community in a new way. The future of npm and the JavaScript ecosystem is very bright.
        </p> 
        </div>     
      </div>
    </div>
  )
}

export default Single