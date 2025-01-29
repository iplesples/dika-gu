


const Th = () => {
  return (
    <tr className="bg-blue-200">
                    <th className="py-2 px-4 border-b text-center">Size</th>
                    <th className="py-2 px-4 border-b text-center">Shoulder</th>
                    <th className="py-2 px-4 border-b text-center">Chest</th>
                    <th className="py-2 px-4 border-b text-center">Sleeve</th>
                    <th className="py-2 px-4 border-b text-center">Length</th>
                </tr>
  )
}


// tabel ukuran
const TabelSize = () => {
const sizespeck = {}

  return ( 
    <div className="w-screen h-screen flex justify-center items-center">
    <div className="rounded-lg shadow-lg w-full">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Ukuran</h1>
        <table className="table-auto w-full text-left text-sm text-gray-700 border-collapse">
            <thead>
                <Th />
            </thead>
            <tbody>
                <tr className="odd:bg-gray-50">
                    <th className="py-2 px-4 border-b text-center">S</th>
                    <td className="py-2 px-4 border-b text-center">54</td>
                    <td className="py-2 px-4 border-b text-center">54</td>
                    <td className="py-2 px-4 border-b text-center">54</td>
                    <td className="py-2 px-4 border-b text-center">54</td>
                </tr>
                <tr className="odd:bg-gray-50">
                    <th className="py-2 px-4 border-b text-center">M</th>
                    <td className="py-2 px-4 border-b text-center">65</td>
                    <td className="py-2 px-4 border-b text-center">65</td>
                    <th className="py-2 px-4 border-b text-center">65</th>
                    <th className="py-2 px-4 border-b text-center">65</th>
                </tr>
                <tr className="odd:bg-gray-50">
                    <th className="py-2 px-4 border-b text-center">L</th>
                    <th className="py-2 px-4 border-b text-center">76</th>
                    <th className="py-2 px-4 border-b text-center">76</th>
                    <th className="py-2 px-4 border-b text-center">76</th>
                    <th className="py-2 px-4 border-b text-center">76</th>
                </tr>
                <tr className="odd:bg-gray-50">
                    <th className="py-2 px-4 border-b text-center">XL</th>
                    <th className="py-2 px-4 border-b text-center">87</th>
                    <th className="py-2 px-4 border-b text-center">87</th>
                    <th className="py-2 px-4 border-b text-center">87</th>
                    <th className="py-2 px-4 border-b text-center">87</th>
                </tr>
            </tbody>
        </table>
    </div>
</div>

  )
}

// Gambar ukuran
const GambarUkur = () => {
  return (
    <div>GambarUkur</div>
  )
}

// container detail
const Detail = () => {
  return (
    <div>
        <GambarUkur />
        <TabelSize />
    </div>

  )
}

export default Detail