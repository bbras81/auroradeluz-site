"use client";

import React from "react";

const CheckoutForm = () => {
  const handleSubmit = async (formData: FormData) => {
    const nome = formData.get("nome");
    const morada = formData.get("morada");
    const cpostal = formData.get("cpostal");
    const email = formData.get("email");
    const telemovel = formData.get("telemovel");
    const quantidade = formData.get("quantidade");
    console.log(nome, morada, cpostal, email, telemovel, quantidade);
  };
  return (
    <div className="lg:col-span-2 col-span-4 bg-white">
      <h2 className="uppercase tracking-wide text-lg text-center font-semibold text-gray-700 my-2">
        Pagamento e Dados de Envio
      </h2>
      <form
        id="payment-form"
        method="POST"
        action={handleSubmit}
        className="max-w-sm mx-auto mb-6"
      >
        <div className="mb-5">
          <label
            htmlFor="nome"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nome
          </label>
          <input
            type="text"
            id="nome"
            className="autofocus bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nome  e apelido"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="morada"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Morada
          </label>
          <input
            type="text"
            id="morada"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Rua e numero"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="cpostal"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Código Postal
          </label>
          <input
            type="text"
            id="cpostal"
            className="autofocus bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="1234-123"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="autofocus bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nome  e apelido"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="telemovel"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Telemóvel
          </label>
          <input
            type="text"
            id="telemovel"
            className="autofocus bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="910 000 000"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Pagar
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
