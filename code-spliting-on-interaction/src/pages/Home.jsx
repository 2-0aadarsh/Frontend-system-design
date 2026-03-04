import { useState, lazy, Suspense } from "react";

const Home = () => {
    const [isChatStarted, setIsChatStarted] = useState(false);
    const [ChatComponent, setChatComponent] = useState(null);

    const handleStartChat = async() => {
        // const ChatModule = lazy(()=> import('../components/MessageInput'));
        const ChatModule = await import('../components/MessageInput');
        console.log(ChatModule);
        setChatComponent(() =>ChatModule.default);
        setIsChatStarted(true);

    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center" >

            <div className="flex flex-col gap-4 p-4 max-w-md mx-auto  rounded-md">Home</div>
            
            {isChatStarted ?    
                <button onClick={handleStartChat} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer" >Close chat</button> : 
                
                <button onClick={handleStartChat} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer" >Start chat</button>}    
        
                {/* {isChatStarted && <Suspense fallback={<div>Loading...</div>}> <ChatComponent /> </Suspense>} */}
                {isChatStarted && <ChatComponent />}
            </div>
    )
}
export default Home;