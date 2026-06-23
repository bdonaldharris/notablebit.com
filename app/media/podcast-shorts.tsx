"use client";

import Image, { type ImageLoader } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const podcastShorts = [
  {
    title: "Unlock Hidden Skills: AI Reveals Your Untapped Potential!",
    videoId: "MzOqnc5QHpU",
    url: "https://youtube.com/shorts/MzOqnc5QHpU",
    thumbnailUrl: "https://i.ytimg.com/vi/MzOqnc5QHpU/oar2.jpg",
  },
  {
    title: "Embrace Detours: Discover Lessons in Unexpected Paths",
    videoId: "jzCg1cjBqF8",
    url: "https://youtube.com/shorts/jzCg1cjBqF8",
    thumbnailUrl: "https://i.ytimg.com/vi/jzCg1cjBqF8/oar2.jpg",
  },
  {
    title: "AI Adoption: Should We Slow Down?",
    videoId: "v4v69Snz4lU",
    url: "https://youtube.com/shorts/v4v69Snz4lU",
    thumbnailUrl: "https://i.ytimg.com/vi/v4v69Snz4lU/oar2.jpg",
  },
  {
    title: "AI Risks: Building Ferraris Without Brakes?",
    videoId: "ju9Rj1ez5BM",
    url: "https://youtube.com/shorts/ju9Rj1ez5BM",
    thumbnailUrl: "https://i.ytimg.com/vi/ju9Rj1ez5BM/oar2.jpg",
  },
] as const;

type PodcastShort = (typeof podcastShorts)[number];

const youtubeThumbnailLoader: ImageLoader = ({ src }) => src;

export function PodcastShorts() {
  const [selectedShort, setSelectedShort] = useState<PodcastShort | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const closeModal = useCallback(() => {
    setSelectedShort(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }, []);

  useEffect(() => {
    if (!selectedShort) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, selectedShort]);

  const openModal = (short: PodcastShort, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelectedShort(short);
  };

  return (
    <>
      <div className="podcast-shorts-grid" aria-label="Recent BIT Voices Podcast YouTube Shorts">
        {podcastShorts.map((short) => (
          <button
            aria-haspopup="dialog"
            aria-label={`Play ${short.title}`}
            className="podcast-short-card"
            key={short.videoId}
            onClick={(event) => openModal(short, event.currentTarget)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openModal(short, event.currentTarget);
              }
            }}
            type="button"
          >
            <span className="podcast-short-title">{short.title}</span>
            <span className="podcast-short-thumbnail">
              <Image
                alt=""
                className="podcast-short-image"
                fill
                loader={youtubeThumbnailLoader}
                sizes="(max-width: 620px) calc(100vw - 48px), (max-width: 980px) 46vw, 24vw"
                src={short.thumbnailUrl}
                unoptimized
              />
              <span className="podcast-short-play" aria-hidden="true">
                <Image alt="" height={30} src="/assets/icons/play.svg" width={30} />
              </span>
            </span>
          </button>
        ))}
      </div>

      {selectedShort ? (
        <div className="media-video-modal-backdrop" onClick={(event) => event.target === event.currentTarget && closeModal()}>
          <section
            aria-labelledby={`media-video-title-${selectedShort.videoId}`}
            aria-modal="true"
            className="media-video-modal"
            role="dialog"
          >
            <div className="media-video-modal-header">
              <h2 id={`media-video-title-${selectedShort.videoId}`}>{selectedShort.title}</h2>
              <button className="media-video-modal-close" onClick={closeModal} ref={closeButtonRef} type="button">
                Close
              </button>
            </div>
            <div className="media-video-frame">
              <iframe
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                src={`https://www.youtube.com/embed/${selectedShort.videoId}`}
                title={`${selectedShort.title} — BIT Voices Podcast YouTube Short`}
              />
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
