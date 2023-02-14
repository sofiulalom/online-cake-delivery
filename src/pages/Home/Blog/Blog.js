import React from 'react';



const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 ml-14 '>
            <div className="card w-96 bg-gray-500 text-gray-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">1. SQL vs NoSQL: Differences, Databases, and Decisions</h2>
                    <p>From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologie</p>
                    <div className="card-actions justify-end">
                    
                    </div>
             </div>
          </div>
          <div className="card w-96 bg-gray-500 text-gray-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">2. What is JWT, and how does it work?</h2>
                    <p>1. JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />
                    2. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                    <div className="card-actions justify-end">
                    
                    </div>
             </div>
          </div>
          <div className="card w-96 bg-gray-500 text-gray-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">3. What is the difference between javascript and NodeJS?</h2>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                    <div className="card-actions justify-end">
                   
                    </div>
             </div>
          </div>
          <div className="card w-96 bg-gray-500 text-gray-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">4. How does NodeJS handle multiple requests at the same time?</h2>
                    <p>Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.</p>
                    <div className="card-actions justify-end">
                    
                    </div>
             </div>
          </div>
        </div>
    );
};

export default Blog;