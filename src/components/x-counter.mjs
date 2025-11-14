/**
 * <x-counter>
 * Simple counter component that demonstrates PAN Bus messaging
 *
 * Publishes: demo:click (retained)
 * Subscribes: demo:click
 */

import { PanClient } from '../../../core/src/components/pan-client.mjs';

class XCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.client = new PanClient();
  }

  async connectedCallback() {
    this.render();

    // Wait for PAN bus to be ready
    await this.client.ready();

    // Subscribe to our own clicks (demonstrates retained messaging)
    this.client.subscribe('demo:click', (msg) => {
      this.count = msg.data.count;
      this.render();
    });

    // Handle button clicks
    this.querySelector('button').addEventListener('click', () => {
      this.count++;
      // Publish with retain=true so new subscribers get the latest count
      this.client.publish('demo:click', { count: this.count }, { retain: true });
    });
  }

  render() {
    this.innerHTML = `
      <div style="text-align: center; padding: 40px; font-family: system-ui;">
        <div style="font-size: 72px; font-weight: bold; color: #333; margin-bottom: 20px;">
          ${this.count}
        </div>
        <button style="
          padding: 16px 32px;
          font-size: 18px;
          background: #4CAF50;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        " onmouseover="this.style.background='#45a049'"
           onmouseout="this.style.background='#4CAF50'">
          Click Me!
        </button>
        <div style="margin-top: 20px; font-size: 14px; color: #666;">
          Each click publishes <code>demo:click</code> on the PAN bus with retained delivery
        </div>
      </div>
    `;
  }
}

customElements.define('x-counter', XCounter);
