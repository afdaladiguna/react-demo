import ColorBox from './ColorBox';

export default function ColorBoxes({ colors }) {
  return (
    <>
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
    </>
  );
}
