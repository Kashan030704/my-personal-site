"use client"; 
import { useState } from "react";

export default function ContactModal() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !name || !message) {
            setErrorMsg("All fields are required.");
            return;
        }

        setStatus("sending");
        setErrorMsg(null);

        try {
            const res = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name, message }),
            });

            if (!res.ok) {
                const body = await res.json();
                console.error('API error response:', body);
                const errorMsg = typeof body.error === "string" ? body.error : body.error?.message || "Failed to send";
                throw new Error(errorMsg);
            }

            setStatus("success");
            // reset form
            setEmail("");
            setName("");
            setMessage("");
        } catch (err: any) {
            console.error(err);
            setStatus("error");
            setErrorMsg(err.message || "An error occurred.");
        }
    };

    return (
        <div className="mx-auto mt-8 w-full max-w-2xl bg-white border border-black/20 rounded-lg shadow-xl overflow-hidden">
            {/* header bar */}
            <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 px-6 py-4 border-b border-black/10">
                <h2 className="text-xl font-bold text-black text-center">Get in Touch</h2>
                <p className="text-sm text-black/80 text-center">
                    Important: user information must be filled
                </p>
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-8 flex flex-col space-y-6">
                {/* message textarea */}
                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-1 text-sm font-medium text-black">
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        className="w-full h-32 p-3 border border-black text-black rounded-md bg-gray-50 transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300 focus:bg-white"
                    ></textarea>
                </div>

                {/* email input */}
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-sm font-medium text-black">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full p-3 border border-black text-black rounded-md bg-gray-50 transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300 focus:bg-white"
                    />
                </div>

                {/* name input */}
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 text-sm font-medium text-black">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full p-3 border border-black text-black rounded-md bg-gray-50 transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300 focus:bg-white"
                    />
                </div>

                {/* error message */}
                {errorMsg && (
                    <p className="text-red-600 text-sm">{errorMsg}</p>
                )}

                {/* submit button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="px-10 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "sending" ? "Sending…" : "Send Direct Email"}
                    </button>
                </div>

                {/* success message */}
                {status === "success" && (
                    <p className="text-green-600 text-sm text-center">Email sent!</p>
                )}
            </form>
        </div>
    );
}