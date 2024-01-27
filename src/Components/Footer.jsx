export default function Footer(){
    return <footer className="text-xs py-4 px-3 sm: p-8 sm: tex-base  bg-white border-t shadow-md flex justify-center">
         {/* Símbolo de copyright se crea con &copy;  */ }
        <p>Derechos de autor &copy; {new Date().getFullYear()} BlockMaker Academy </p>
    </footer>
} 