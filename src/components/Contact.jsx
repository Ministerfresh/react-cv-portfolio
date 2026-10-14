import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import contact from "../data/contact";
import SectionTitle from "./ui/SectionTitle";
import Container from "./ui/Container";
import Card from "./ui/Card";

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaLocationDot, } from "react-icons/fa6";

function Contact() {
    const form = useRef();

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSending(true);
        setStatus({
            type: "",
            message: "",
        });

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });

            form.current.reset();
        } catch (error) {
            console.error("EmailJs error:", error);

            setStatus({
                type: "error",
                message: "Sorry, your message could not be sent. Please try again.",
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section
        id="contact"
        className="bg-slate-900 text-white py-24">
            <Container>
                <SectionTitle title="Contact Me" />
                <div className="grid lg:grid-cols-2 gap-10">

                    {/*Left Side*/}
                    <Card>
                        
                        <h3 className="text-2xl font-bold mb-6">
                            Let's Connect
                        </h3>

                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-blue-400 text-xl" />
                                <span>{contact.email}</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaPhone className="text-blue-400 text-xl" />
                                <span>{contact.phone}</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaLocationDot className="text-blue-400 text-xl" />
                                <span>{contact.location}</span>
                            </div>
                        </div>

                        <div className="flex gap-6 mt-8">

                            <a
                            href={contact.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Github">
                                <FaGithub className="text-3xl hover:text-blue-400 transition" />
                            </a>

                            <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn">
                                <FaLinkedin className="text-3xl hover:text-blue-400 transition" />
                            </a>
                        </div>
                    </Card>

                    {/*Right Side*/}

                    <Card>
                        <form 
                        ref={form}
                        onSubmit={handleSubmit}
                        className="space-y-5">
                            <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            aria-label="Your Name"
                            autoComplete="name"
                            required
                            className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500" />

                            <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            aria-label="Your Email"
                            autoComplete="email"
                            required
                            className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500" />

                            <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            aria-label="Subject"
                            required
                            className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500" />

                            <textarea
                            name="message"
                            rows="6"
                            placeholder="Your Message"
                            aria-label="Your Message"
                            required
                            className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500"></textarea>

                            {status.message && (
                                <p
                                role="status"
                                aria-live="polite"
                                className={`text-sm ${ status.type === "success" ? "text-green-400" : "text-red-400" }`}>
                                    {status.message}
                                </p>
                            )}

                            <button
                            type="submit"
                            disabled={isSending}
                            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
                                {isSending ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </Card>
                </div>
            </Container>
        </section>
    );
}

export default Contact;

