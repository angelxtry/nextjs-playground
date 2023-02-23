import { atom, useRecoilState } from 'recoil';

const useAtom = atom({
  key: 'usd',
  default: 1,
});

const CurrencyConverterPage = () => {
  const [usd, setUsd] = useRecoilState(useAtom);
  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <input value={usd} onChange={(e) => setUsd(+e.target.value)} />
        <input />
      </div>
    </div>
  );
};

export default CurrencyConverterPage;
