import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ZPods() {
  return (
    <section id="zpods" className="zpods-section max-w-7xl mx-auto mt-12 overflow-hidden rounded-2xl">
      <div className="grid lg:grid-cols-2">
        <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
          <p className="section-eyebrow text-red-400">ZPODS BY AL AFDAL</p>
          <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Space to focus.<br />Room to connect.</h3>
          <p className="mt-5 text-gray-300 leading-relaxed">A dedicated acoustic workspace for private calls, focused work and commercial meetings. Shape your pod around the way your business works.</p>
          <ul className="mt-6 space-y-3 text-sm text-gray-200">
            {['Zoom meetings and private conversations', 'Team discussions and focused collaboration', 'Custom layouts, finishes and acoustic treatments'].map(item => <li key={item} className="flex gap-3 items-center"><Check size={17} className="text-red-400 shrink-0" />{item}</li>)}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-gray-400">Lighting, furniture, ventilation and power can be coordinated to your brief. Acoustic performance and included features depend on the selected specification.</p>
          <a href="#contact" className="mt-7 inline-flex gap-2 items-center self-start rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold">Enquire about ZPods <ArrowUpRight size={17} /></a>
        </div>
        <div className="zpod-media p-5 sm:p-8 lg:pl-0 flex flex-col justify-center gap-4">
          <figure className="overflow-hidden rounded-xl bg-white/5">
            <img src="/assets/zpod-meeting.png" alt="Commercial meeting pod for team conversations" className="w-full aspect-[3/2] object-cover" loading="lazy" />
            <figcaption className="px-5 py-4 text-sm text-gray-300">A room for the conversation, within your workplace.</figcaption>
          </figure>
          <div className="flex items-center gap-5 rounded-xl border border-white/10 p-3">
            <img src="/assets/zpod-focus.png" alt="Individual acoustic ZPod in a bright workplace" className="w-24 h-28 rounded-lg object-cover object-bottom" loading="lazy" />
            <div><p className="text-sm font-medium">Your own quiet corner.</p><p className="mt-2 text-xs leading-relaxed text-gray-400">Private calls, focused work<br />and a more considered working day.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
