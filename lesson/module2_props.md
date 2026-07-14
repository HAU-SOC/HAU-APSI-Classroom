---
layout: default
title: React Props | HAU APSI Classroom
---

<section class="relative py-16 px-6 text-center text-white" style="background: linear-gradient(135deg, rgb(107, 29, 46), rgb(74, 19, 32));">
  <div class="relative z-10 max-w-4xl mx-auto">
    <h1 class="font-bold mb-4 text-3xl md:text-4xl text-white">React Props</h1>
    <p class="text-lg opacity-90 mb-8 text-white">Learn how to pass data between your React components using properties.</p>
  </div>
</section>

<main class="max-w-4xl mx-auto px-6 py-12 space-y-12">

  <section id="what-are-props">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">1. What are Props?</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm">
      <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-gold mb-6">
        <p class="text-gray-900 font-medium">💡 <strong>Props</strong> stands for <strong>properties</strong>.</p>
        <p class="text-sm text-gray-700 mt-1">They are a special keyword in React used to pass data from one component to another (mostly from a parent component to a child component). Think of them as a data carrier.</p>
      </div>
      
      <p class="text-gray-700 mb-4">React Props are just like function arguments in regular JavaScript, and they look exactly like HTML attributes.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Passing the Prop</h3>
          <p class="text-sm text-gray-600 mb-2">Send props into a component just like an HTML attribute.</p>
          <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-blue-400">createRoot</span>(<span class="text-yellow-300">document</span>.<span class="text-blue-400">getElementById</span>(<span class="text-green-300">'root'</span>)).<span class="text-blue-400">render</span>(
  <span class="text-gray-300">&lt;</span><span class="text-red-400">Car</span> <span class="text-yellow-300">brand</span><span class="text-gray-300">=</span><span class="text-green-300">"Ford"</span> <span class="text-gray-300">/&gt;</span>
);</code></pre>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Receiving the Prop</h3>
          <p class="text-sm text-gray-600 mb-2">The component receives the argument as an object.</p>
          <pre class="bg-gray-900 text-blue-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Car</span>(props) {
  <span class="text-purple-400">return</span> (
    <span class="text-gray-300">&lt;</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>I am a {props.brand}!<span class="text-gray-300">&lt;/</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>
  );
}</code></pre>
        </div>
      </div>
      <p class="text-sm text-gray-500 italic mt-4">Note: The object is usually called `props` by convention, but you can technically name it whatever you want (like `myobj`).</p>
    </div>
  </section>

  <section id="data-types">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">2. Multiple Properties & Data Types</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm space-y-8">
      
      <div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Passing Multiple Properties</h3>
        <p class="text-gray-700 mb-4">You can send as many properties as you want. They will all be bundled into the <code>props</code> object.</p>
        <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-2"><code><span class="text-gray-300">&lt;</span><span class="text-red-400">Car</span> <span class="text-yellow-300">brand</span><span class="text-gray-300">=</span><span class="text-green-300">"Ford"</span> <span class="text-yellow-300">model</span><span class="text-gray-300">=</span><span class="text-green-300">"Mustang"</span> <span class="text-yellow-300">color</span><span class="text-gray-300">=</span><span class="text-green-300">"red"</span> <span class="text-gray-300">/&gt;</span></code></pre>
        <pre class="bg-gray-900 text-blue-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Car</span>(props) {
  <span class="text-purple-400">return</span> <span class="text-gray-300">&lt;</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>I am a {props.color} {props.brand} {props.model}!<span class="text-gray-300">&lt;/</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>;
}</code></pre>
      </div>

      <div class="border-l-4 border-maroon pl-6 py-2 bg-gray-50 rounded-r-lg">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Different Data Types</h3>
        <p class="text-sm text-gray-700 mb-4">Props can be any data type. While strings can be sent in quotes, <strong>numbers, variables, arrays, and objects must be wrapped in curly brackets <code>{ }</code>.</strong></p>
        
        <div class="space-y-4">
          <div>
            <span class="text-xs font-bold uppercase text-gray-500">Numbers</span>
            <pre class="bg-gray-900 text-gray-300 p-3 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-gray-300">&lt;</span><span class="text-red-400">Car</span> <span class="text-yellow-300">year</span><span class="text-gray-300">=</span>{<span class="text-orange-300">1969</span>} <span class="text-gray-300">/&gt;</span></code></pre>
          </div>
          <div>
            <span class="text-xs font-bold uppercase text-gray-500">Variables</span>
            <pre class="bg-gray-900 text-gray-300 p-3 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">let</span> x = <span class="text-green-300">"Ford"</span>;
<span class="text-gray-300">&lt;</span><span class="text-red-400">Car</span> <span class="text-yellow-300">brand</span><span class="text-gray-300">=</span>{x} <span class="text-gray-300">/&gt;</span></code></pre>
          </div>
          <div>
            <span class="text-xs font-bold uppercase text-gray-500">Arrays & Objects</span>
            <pre class="bg-gray-900 text-gray-300 p-3 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">let</span> yearsArr = [<span class="text-orange-300">1964</span>, <span class="text-orange-300">1965</span>, <span class="text-orange-300">1966</span>];
<span class="text-purple-400">let</span> infoObj = { name: <span class="text-green-300">"Ford"</span>, model: <span class="text-green-300">"Mustang"</span> };
<span class="text-gray-300">&lt;</span><span class="text-red-400">Car</span> <span class="text-yellow-300">years</span><span class="text-gray-300">=</span>{yearsArr} <span class="text-yellow-300">carinfo</span><span class="text-gray-300">=</span>{infoObj} <span class="text-gray-300">/&gt;</span></code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="complex-props">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">3. Using Object & Array Props</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2"><i data-lucide="box" class="w-5 h-5 text-maroon"></i> Object Props</h3>
        <p class="text-gray-700 mb-4 text-sm">Use <strong>dot notation</strong> to access object properties.</p>
        <pre class="bg-gray-900 text-blue-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Car</span>(props) {
  <span class="text-purple-400">return</span> (
    <span class="text-gray-300">&lt;</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>My {props.carinfo.name}!<span class="text-gray-300">&lt;/</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>
  );
}</code></pre>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2"><i data-lucide="list" class="w-5 h-5 text-maroon"></i> Array Props</h3>
        <p class="text-gray-700 mb-4 text-sm">Use <strong>indexes</strong> to access array properties.</p>
        <pre class="bg-gray-900 text-blue-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Car</span>(props) {
  <span class="text-purple-400">return</span> (
    <span class="text-gray-300">&lt;</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>My {props.carinfo[<span class="text-orange-300">0</span>]}!<span class="text-gray-300">&lt;/</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>
  );
}</code></pre>
      </div>

    </div>
  </section>

  <section id="destructuring">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">4. Destructuring Props</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm space-y-8">
      
      <p class="text-gray-700">Instead of typing <code>props.</code> over and over, you can unpack the object properties directly using JavaScript destructuring.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Destructuring in Parameters</h3>
          <p class="text-sm text-gray-600 mb-2">Limit exactly what the component receives.</p>
          <pre class="bg-gray-900 text-blue-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Car</span>({ color }) {
  <span class="text-purple-400">return</span> <span class="text-gray-300">&lt;</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>My car is {color}!<span class="text-gray-300">&lt;/</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>;
}</code></pre>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Destructuring Inside Body</h3>
          <p class="text-sm text-gray-600 mb-2">Extract variables from the <code>props</code> object.</p>
          <pre class="bg-gray-900 text-blue-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Car</span>(props) {
  <span class="text-purple-400">const</span> { brand, model } = props;
  <span class="text-purple-400">return</span> <span class="text-gray-300">&lt;</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>I love my {brand} {model}!<span class="text-gray-300">&lt;/</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>;
}</code></pre>
        </div>
      </div>

      <div class="border-t border-gray-100 pt-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">The ...rest Operator</h3>
          <p class="text-sm text-gray-700 mb-2">When you don't know how many properties you'll receive, extract the ones you need and store the rest in a new object.</p>
          <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Car</span>({ color, brand, ...rest }) {
  <span class="text-gray-500">// 'rest' now holds { model: "Mustang", year: 1969 }</span>
  <span class="text-purple-400">return</span> <span class="text-gray-300">&lt;</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>My {rest.model} is {color}!<span class="text-gray-300">&lt;/</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>;
}</code></pre>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Default Values</h3>
          <p class="text-sm text-gray-700 mb-2">If a property isn't passed, you can assign a fallback default value.</p>
          <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Car</span>({ color = <span class="text-green-300">"blue"</span>, brand }) {
  <span class="text-purple-400">return</span> <span class="text-gray-300">&lt;</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>My {color} {brand}!<span class="text-gray-300">&lt;/</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>;
}
<span class="text-gray-500">// Output: "My blue Ford!"</span></code></pre>
        </div>
      </div>
    </div>
  </section>

  <section id="props-children">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">5. The Children Prop</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm">
      <p class="text-gray-700 mb-6">In React, you can send the content placed <em>between</em> the opening and closing tags of a component to another component. This is accessed using the special <code>props.children</code> property. It is perfect for building layout wrappers (like Cards or Modals).</p>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 class="font-bold text-gray-900 mb-2">1. The Parent (Sending Content)</h3>
          <pre class="bg-gray-900 text-blue-300 p-4 rounded-lg text-sm font-mono overflow-x-auto h-full"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Parent</span>() {
  <span class="text-purple-400">return</span> (
    <span class="text-gray-300">&lt;</span><span class="text-red-400">Son</span><span class="text-gray-300">&gt;</span>
      <span class="text-gray-300">&lt;</span><span class="text-red-400">p</span><span class="text-gray-300">&gt;</span>This text was written in Parent,
      but displayed inside Son.<span class="text-gray-300">&lt;/</span><span class="text-red-400">p</span><span class="text-gray-300">&gt;</span>
    <span class="text-gray-300">&lt;/</span><span class="text-red-400">Son</span><span class="text-gray-300">&gt;</span>
  );
}</code></pre>
        </div>
        <div>
          <h3 class="font-bold text-gray-900 mb-2">2. The Child (Rendering Content)</h3>
          <pre class="bg-gray-900 text-blue-300 p-4 rounded-lg text-sm font-mono overflow-x-auto h-full"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Son</span>(props) {
  <span class="text-purple-400">return</span> (
    <span class="text-gray-300">&lt;</span><span class="text-red-400">div</span> <span class="text-yellow-300">className</span><span class="text-gray-300">=</span><span class="text-green-300">"bg-green-100"</span><span class="text-gray-300">&gt;</span>
      <span class="text-gray-300">&lt;</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>Son Component<span class="text-gray-300">&lt;/</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>
      
      <span class="text-gray-500">{/* Renders the <p> tag from above */}</span>
      <span class="text-gray-300">&lt;</span><span class="text-red-400">div</span><span class="text-gray-300">&gt;</span>{props.children}<span class="text-gray-300">&lt;/</span><span class="text-red-400">div</span><span class="text-gray-300">&gt;</span>
    <span class="text-gray-300">&lt;/</span><span class="text-red-400">div</span><span class="text-gray-300">&gt;</span>
  );
}</code></pre>
        </div>
      </div>
    </div>
  </section>

</main>
