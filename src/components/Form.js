import React from "react";

function Form() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Posílám...");
        const formData = new FormData(event.target);

        formData.append("access_key", "4f4e8d56-c5df-419b-bd88-8359941fc1ba");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Odesláno! Děkuji za zprávu.");
            event.target.reset();
        } else {
            console.log("Chyba, zkus to znovu.", data);
            setResult(data.message);
        }
    };

    return (
        <div className="form-container">
                <form className="contact-form" id="form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Jméno a příjmení</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Jana Nováková"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="jana.novakova@gmail.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Tvoje přání</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder={`1. Napiš svoji představu, co chceš vytetovat\n2. Umístění na těle\n3. Velikost (přibližně)\nNEBO\nCo si chceš objednat :)`}
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Odeslat</button>
                </form>
            <span>{result}</span>

        </div>
    );
}

export default Form;