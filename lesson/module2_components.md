---
layout: default
title: React Components | HAU APSI Classroom
---

<section class="relative py-16 px-6 text-center text-white" style="background: linear-gradient(135deg, rgb(107, 29, 46), rgb(74, 19, 32));">
  <div class="relative z-10 max-w-4xl mx-auto">
    <h1 class="font-bold mb-4 text-3xl md:text-4xl text-white">React Components</h1>
    <p class="text-lg opacity-90 mb-8 text-white">Learn how to build independent, reusable pieces of UI to construct complex applications.</p>
  </div>
</section>

<main class="max-w-4xl mx-auto px-6 py-12 space-y-12">

  <section id="intro">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">1. Understanding Components</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm">
      <p class="text-gray-700 mb-4">Components are like JavaScript functions, but they work in isolation and return HTML elements. They are independent and reusable bits of code.</p>
      <p class="text-gray-700 mb-6">While components come in two types (Class and Function), modern React development focuses primarily on <strong>Function components</strong>.</p>
      
      <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-gold">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Creating Your First Component</h3>
        <p class="text-sm text-gray-700 mb-4">When creating a React component, the component's name <strong>MUST start with an uppercase letter</strong>.</p>
        
        <pre class="bg-gray-900 text-blue-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Car</span>() {
  <span class="text-purple-400">return</span> (
    <span class="text-gray-300">&lt;</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span><span class="text-white">Hi, I am a Car!</span><span class="text-gray-300">&lt;/</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>
  );
}</code></pre>
      </div>
    </div>
  </section>

  <section id="rendering-props">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">2. Rendering and Props</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm space-y-8">
      
      <div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Rendering a Component</h3>
        <p class="text-gray-700 mb-4">To use the <code>Car</code> component in your application, refer to it using JSX syntax: <code>&lt;Car /&gt;</code>.</p>
        <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-blue-400">createRoot</span>(<span class="text-yellow-300">document</span>.<span class="text-blue-400">getElementById</span>(<span class="text-green-300">'root'</span>)).<span class="text-blue-400">render</span>(
  <span class="text-gray-300">&lt;</span><span class="text-red-400">Car</span> <span class="text-gray-300">/&gt;</span>
);</code></pre>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Introducing Props</h3>
        <p class="text-gray-700 mb-4">Arguments can be passed into a component as <strong>props</strong> (properties). You pass them exactly like HTML attributes.</p>
        <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Car</span>(props) {
  <span class="text-purple-400">return</span> (
    <span class="text-gray-300">&lt;</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>I am a {props.color} Car!<span class="text-gray-300">&lt;/</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>
  );
}

<span class="text-gray-500">// Rendering with a prop</span>
<span class="text-blue-400">createRoot</span>(<span class="text-yellow-300">document</span>.<span class="text-blue-400">getElementById</span>(<span class="text-green-300">'root'</span>)).<span class="text-blue-400">render</span>(
  <span class="text-gray-300">&lt;</span><span class="text-red-400">Car</span> <span class="text-yellow-300">color</span><span class="text-gray-300">=</span><span class="text-green-300">"red"</span> <span class="text-gray-300">/&gt;</span>
);</code></pre>
      </div>
    </div>
  </section>

  <section id="composition">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">3. Component Composition</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm space-y-8">
      
      <div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Components in Components</h3>
        <p class="text-gray-700 mb-4">You can use components inside other components to build complex layouts from simple building blocks.</p>
        <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Garage</span>() {
  <span class="text-purple-400">return</span> (
    <span class="text-gray-300">&lt;&gt;</span>
      <span class="text-gray-300">&lt;</span><span class="text-red-400">h1</span><span class="text-gray-300">&gt;</span>Who lives in my Garage?<span class="text-gray-300">&lt;/</span><span class="text-red-400">h1</span><span class="text-gray-300">&gt;</span>
      <span class="text-gray-300">&lt;</span><span class="text-red-400">Car</span> <span class="text-yellow-300">brand</span><span class="text-gray-300">=</span><span class="text-green-300">"Ford"</span> <span class="text-gray-300">/&gt;</span>
      <span class="text-gray-300">&lt;</span><span class="text-red-400">Car</span> <span class="text-yellow-300">brand</span><span class="text-gray-300">=</span><span class="text-green-300">"BMW"</span> <span class="text-gray-300">/&gt;</span>
    <span class="text-gray-300">&lt;/&gt;</span>
  );
}</code></pre>
      </div>

      <div class="border-l-4 border-maroon pl-6 py-2 bg-gray-50 rounded-r-lg">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Separation of Concerns (Files)</h3>
        <p class="text-sm text-gray-700 mb-4">React is about re-using code. It is best practice to split components into separate <code>.jsx</code> files. Export them from their own file, and import them where needed.</p>
        
        <div class="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center gap-2">
          <span class="text-gray-400 text-xs font-mono ml-2">Vehicle.jsx</span>
        </div>
        <pre class="bg-gray-900 text-gray-300 p-4 rounded-b-lg text-sm font-mono overflow-x-auto mb-4"><code><span class="text-purple-400">export default function</span> <span class="text-blue-400">Car</span>() {
  <span class="text-purple-400">return</span> <span class="text-gray-300">&lt;</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>Hi, I am a Car!<span class="text-gray-300">&lt;/</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>;
}</code></pre>

        <div class="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center gap-2 mt-4">
          <span class="text-gray-400 text-xs font-mono ml-2">main.jsx</span>
        </div>
        <pre class="bg-gray-900 text-gray-300 p-4 rounded-b-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">import</span> { createRoot } <span class="text-purple-400">from</span> <span class="text-green-300">'react-dom/client'</span>;
<span class="text-purple-400">import</span> Car <span class="text-purple-400">from</span> <span class="text-green-300">'./Vehicle.jsx'</span>;

<span class="text-blue-400">createRoot</span>(<span class="text-yellow-300">document</span>.<span class="text-blue-400">getElementById</span>(<span class="text-green-300">'root'</span>)).<span class="text-blue-400">render</span>(<span class="text-gray-300">&lt;</span><span class="text-red-400">Car</span> <span class="text-gray-300">/&gt;</span>);</code></pre>
      </div>
    </div>
  </section>

  <section id="injecting-data">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">4. Injecting Data into JSX</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm">
      <p class="text-gray-700 mb-4">You can pass different data types as dynamic data into your components, including strings, numbers, arrays, or objects. Use curly brackets <code>{ }</code> to inject JavaScript variables.</p>
      
      <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">const</span> author = { firstName: <span class="text-green-300">'Asabeneh'</span>, lastName: <span class="text-green-300">'Yetayeh'</span> };
<span class="text-purple-400">const</span> currentYear = <span class="text-orange-300">2020</span>;
<span class="text-purple-400">const</span> yearBorn = <span class="text-orange-300">1820</span>;

<span class="text-purple-400">const</span> <span class="text-blue-400">UserCard</span> = () =&gt; (
  <span class="text-gray-300">&lt;</span><span class="text-red-400">div</span> <span class="text-yellow-300">className</span><span class="text-gray-300">=</span><span class="text-green-300">'user-card'</span><span class="text-gray-300">&gt;</span>
    <span class="text-gray-300">&lt;</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>{author.firstName} {author.lastName}<span class="text-gray-300">&lt;/</span><span class="text-red-400">h2</span><span class="text-gray-300">&gt;</span>
    <span class="text-gray-300">&lt;</span><span class="text-red-400">p</span><span class="text-gray-300">&gt;</span>Age: {currentYear - yearBorn}<span class="text-gray-300">&lt;/</span><span class="text-red-400">p</span><span class="text-gray-300">&gt;</span>
  <span class="text-gray-300">&lt;/</span><span class="text-red-400">div</span><span class="text-gray-300">&gt;</span>
);</code></pre>

      <div class="mt-6 p-4 bg-yellow-50 rounded-lg text-sm text-gray-700 border border-yellow-200">
        <strong class="text-yellow-800"><i data-lucide="lightbulb" class="inline w-4 h-4 mr-1"></i> Pro Tip for Styling:</strong> 
        You can inject CSS objects directly into the <code>style</code> attribute. Just remember to use camelCase (e.g., <code>borderRadius</code> instead of <code>border-radius</code>).
      </div>
    </div>
  </section>

  <section id="exercises" class="bg-gray-50 py-12 px-8 rounded-xl border border-gray-200">
    <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
      <i data-lucide="dumbbell" class="text-maroon w-8 h-8"></i> Practice Exercises
    </h2>
    
    <div class="space-y-8">
      <div class="bg-white p-6 rounded-lg shadow-sm border-t-4 border-gold">
        <h3 class="font-bold text-lg text-maroon mb-4">Level 1: Concept Check</h3>
        <ol class="list-decimal pl-5 space-y-2 text-gray-700 text-sm">
          <li>What is the difference between a regular function and an arrow function?</li>
          <li>What is a React Component?</li>
          <li>How do you make a React functional component?</li>
          <li>What is the difference between a pure JavaScript function and a functional component?</li>
          <li>How small can a React component be? Can we make a button or input field component?</li>
          <li>Make a reusable <code>Button</code> component.</li>
          <li>Make a reusable <code>InputField</code> component.</li>
          <li>Make a reusable alert box component with one <code>div</code> parent element and one <code>p</code> child element (e.g., warning alert, success alert).</li>
        </ol>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border-t-4 border-gold">
        <h3 class="font-bold text-lg text-maroon mb-4">Level 2: Building UIs</h3>
        <ul class="space-y-4 text-gray-700 text-sm list-disc pl-5">
          <li>
            <strong>Front-End Technologies:</strong> Create functional components to display a grid of technology logos.
            <img src="../images/frontend_technologies.png" alt="Front end layout" class="mt-2 rounded border border-gray-200 max-w-sm w-full">
          </li>
          <li>
            <strong>Newsletter Subscription:</strong> Use functional components to recreate a newsletter signup design.
            <img src="../images/news_letter_design.png" alt="Newsletter layout" class="mt-2 rounded border border-gray-200 max-w-sm w-full">
          </li>
        </ul>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border-t-4 border-gold">
        <h3 class="font-bold text-lg text-maroon mb-4">Level 3: Dynamic Data</h3>
        <ul class="space-y-4 text-gray-700 text-sm list-disc pl-5">
          <li>
            <strong>Hexadecimal Colors:</strong> Use a hexadecimal color generator function inside a component to output a grid of random colors on the screen.
            <img src="../images/hexadecimal_color_exercise.png" alt="Hex color layout" class="mt-2 rounded border border-gray-200 max-w-sm w-full">
          </li>
          <li>
            <strong>User Profile Card:</strong> Design and build a user profile card component that takes user data as props.
            <img src="../images/user_card_design_jsx.png" alt="User card layout" class="mt-2 rounded border border-gray-200 max-w-sm w-full">
          </li>
        </ul>
      </div>
    </div>
  </section>

</main>
