import OpenAI from "openai";

const openai = new OpenAI();
const OPENAI_API_KEY = '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';

async function main() {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0301",
    prompt: 'hello',
    max_tokens: 6400,
    temperature: 1,
    messages: [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello!"}
    ],
    stream: true,
  });

  for await (const chunk of completion) {
    console.log(chunk.choices[0].delta.content);
  }
}
// {
//     "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
//     "object": "text_completion",
//     "created": 1589478378,
//     "model": "gpt-3.5-turbo",
//     "choices": [
//       {
//         "text": "\n\nThis is indeed a test",
//         "index": 0,
//         "logprobs": null,
//         "finish_reason": "length"
//       }
//     ],
//     "usage": {
//       "prompt_tokens": 5,
//       "completion_tokens": 7,
//       "total_tokens": 12
//     }
//   }
  

main();


// imported modules ...

// export default function App() {
//     // useState variables ...
  
//     const handleSubmit = async () => {
//       const prompt = {
//         role: "user",
//         content: input,
//       };
  
//       setMessages([...messages, prompt]);
  
//       await fetch("https://api.openai.com/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           model: "gpt-3.5-turbo",
//           messages: [...messages, prompt],
//         }),
//       })
//         .then((data) => data.json())
//         .then((data) => {
//           const res = data.choices[0].message.content;
//           setMessages((messages) => [
//             ...messages,
//             {
//               role: "assistant",
//               content: res,
//             },
//           ]);
//           setHistory((history) => [...history, { question: input, answer: res }]);
//           setInput("");
//         });
//     };
  
//     const clear = () => {
//       setMessages([]);
//       setHistory([]);
//     };
  
//     return <div className="App">// returned elements ...</div>;
//   }

//   import { useState } from "react";

// import Message from "./components/Message";
// import Input from "./components/Input";
// import History from "./components/History";
// import Clear from "./components/Clear";

// import "./styles.css";

// export default function App() {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [history, setHistory] = useState([]);

//   return (
//     <div className="App">
//       <div className="Column">
//         <h3 className="Title">Chat Messages</h3>
//         <div className="Content">
//           {messages.map((el, i) => {
//             return <Message key={i} role={el.role} content={el.content} />;
//           })}
//         </div>
//         <Input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onClick={input ? handleSubmit : undefined}
//         />
//       </div>
//       <div className="Column">
//         <h3 className="Title">History</h3>
//         <div className="Content">
//           {history.map((el, i) => {
//             return (
//               <History
//                 key={i}
//                 question={el.question}
//                 onClick={() =>
//                   setMessages([
//                     { role: "user", content: history[i].question },
//                     { role: "assistant", content: history[i].answer },
//                   ])
//                 }
//               />
//             );
//           })}
//         </div>
//         <Clear onClick={clear} />
//       </div>
//     </div>
//   );