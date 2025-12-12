import TextPressure from "./TextPressure";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white px-4 md:px-16 overflow-hidden" style={{paddingTop: '3.5rem', paddingBottom: '0', borderBlockStartStyle: 'dashed', borderBlockStartWidth: '2px', borderBlockStartColor: '#333'}}>
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end md:items-end max-w-7xl mx-auto min-h-[180px]">
        {/* Right: Socials */}
        
      </div>
      {/* Giant TextPressure background, only 1/4 hidden at bottom */}
      <div
        className="pointer-events-none select-none absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-25 z-0"
        style={{ fontSize: 'min(32vw, 320px)', lineHeight: 1, height: '120%', bottom: '-25%' }}
      >
        <TextPressure text="Machbox!" textColor="#bbb" stroke={false} width={true} weight={true} italic={false} flex={true} />
      </div>
    </footer>
  );
}
