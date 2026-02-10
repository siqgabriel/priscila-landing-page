'use client';
import React, { useEffect } from 'react';

function Cursor() {
  useEffect(() => {
    // Detecta se é dispositivo touch / mobile
    const isTouchDevice =
      typeof window !== 'undefined' &&
      (window.matchMedia('(pointer: coarse)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0);

    // Se for mobile/touch, não ativa cursor
    if (isTouchDevice) return;

    const link = document.querySelectorAll('.hover-this');
    const cursor = document.querySelector('.cursor');

    if (!cursor) return;

    const animateit = function (e) {
      const hoverAnim = this.querySelector('.hover-anim');
      if (!hoverAnim) return;

      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = this;
      const move = 25;
      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;

      hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };

    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };

    // Add listeners
    link.forEach((b) => b.addEventListener('mousemove', animateit));
    link.forEach((b) => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    const hoverTargets = document.querySelectorAll('a, .cursor-pointer');

    hoverTargets.forEach((el) => {
      el.addEventListener('mousemove', () => {
        cursor.classList.add('cursor-active');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-active');
      });
    });

    // Cleanup (importante para Next.js / SPA)
    return () => {
      link.forEach((b) => b.removeEventListener('mousemove', animateit));
      link.forEach((b) => b.removeEventListener('mouseleave', animateit));
      window.removeEventListener('mousemove', editCursor);

      hoverTargets.forEach((el) => {
        el.removeEventListener('mousemove', () => { });
        el.removeEventListener('mouseleave', () => { });
      });
    };
  }, []);

  // Não renderiza cursor em mobile via CSS também
  return <div className="cursor desktop-only"></div>;
}

export default Cursor;
