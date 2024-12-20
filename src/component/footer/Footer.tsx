
function Footer() {
	return (
		<footer className="bg-bgmenu text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Nuestra Tienda</h4>
          <p className="text-sm">
            Bienvenido a nuestra tienda virtual, donde encontrarás productos de alta calidad a precios increíbles.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-gray-300 hover:text-white transition hover:text-[#000]">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="/products" className="text-gray-300 hover:text-white transition hover:text-[#000]">
                Productos
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-white transition hover:text-[#000]">
                Contacto
              </a>
            </li>
            <li>
              <a href="/faq" className="text-gray-300 hover:text-white transition hover:text-[#000]">
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contáctanos</h4>
          <p className="text-sm">
            Email: <a href="mailto:fashion_store@gmail.com" className="text-gray-300 hover:text-[#000]">fashion_store@gmail.com</a>
          </p>
          <p className="text-sm">
            Teléfono: <a href="tel:+5356666666" className="text-gray-300 hover:text-[#000]">+5356666666</a>
          </p>
          <p className="text-sm">Horario: Lunes a Viernes, 8:00 AM - 5:00 PM</p>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-black-700 pt-4">
        <p className="text-sm text-black-400">
          &copy; {new Date().getFullYear()} Fashion Store. Todos los derechos reservados.
        </p>
      </div>
    </footer>
	);
}

export default Footer;
