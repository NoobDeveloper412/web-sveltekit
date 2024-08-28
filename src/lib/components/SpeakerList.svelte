<script>
    import { marked } from 'marked';
    import { getSpeaker, getSpeakerImage } from '$utils/events.js';
    import core from '$json/core.json';
  
    export let item;
    export let thumbSize;
  
    const speakers = item.speakers ? item.speakers.map(spId => getSpeaker(core, spId)) : [];
  </script>
  
  {#if item.speakers && item.speakers.length > 0}
    <div class="my-6">
      <h2>Speakers ({speakers.length})</h2>
      <div class="w3pn-speaker-list grid grid-cols-1 gap-6 mt-4">
        {#each speakers as speaker}
          <div class="flex gap-4">
            <div class={thumbSize === 'big' ? 'w-16 h-16' : 'w-14 h-14'}>
              <img class={`${thumbSize === 'big' ? 'w-16 h-16' : 'w-14 h-14'} aspect-square rounded-full object-cover`} src={getSpeakerImage(speaker, '128')} />
            </div>
            <div>
              <div>
                <span class="text-white">{speaker.name}</span>
                {#if speaker.refs?.twitter}
                  <span class="ml-2">
                    (<a href={"https://twitter.com/" + speaker.refs.twitter}>@{speaker.refs.twitter}</a>)
                  </span>
                {/if}
              </div>
              <div class="text-sm" {@html marked.parseInline(speaker.caption)}></div>
            </div>
          </div>
        {/each}
      </div>
  
      <div class="mt-8">
        <a href={core.links.cfp} class="button inverted"><button>Submit proposal (CfP)</button></a>
      </div>
    </div>
  {:else}
    <div class="my-6">
      <h2>Speakers (0)</h2>
      <div class="mt-4">Stay tuned. Speakers coming :-)</div>
      <div class="mt-6">
        <a href={core.links.cfp} class="button inverted"><button>Submit proposal (CfP)</button></a>
      </div>
    </div>
  {/if}
  