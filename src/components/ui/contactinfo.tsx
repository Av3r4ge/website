import CopyButton from "../copybutton";

export default function ContactInfo() {

    return (
        <div className="lg:max-w-7xl w-full mx-auto py-6 mb-6">
            <hr/>

            <h1 className="font-bold text-neutral-400 lg:text-5xl text-4xl my-6"> Contact Info </h1>
            <p className="text-3xl text-neutral-400" > You can reach out to me at my email 
                <span id="contact_info" className="text-purple-500"> contact@alxg.cc </span> 
                <CopyButton/>
            </p>
        </div>
    );

}