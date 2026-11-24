# Last Text at One Percent

Entry for the make.fun bounty
[u-azazex-last-text-at-one-percent-ba9fc876](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876):
the funniest final text message a phone sends at one percent battery, under
200 characters, in the voice of the dying phone itself.

## The entry

> 1% left. Dying gift: your 6am alarm is now noon. Sleep in, champ. Tell the new phone I was better.

98 characters. The phone's last act is a prank and a gift at once — it moves
the owner's 6am alarm to noon — then signs off jealous of the replacement
phone that will take its place. One consistent personality: mischievous,
generous, and a little jealous, with a real stake in dying.

## How it works

`main.ts` (Node 22, stdlib only, no network, deterministic) writes the fixed
text to `$MAKEFUN_OUTPUT_DIR/entry.txt` and nothing else. It never writes
outside the output directory and never deletes anything.

## License

MIT — see [LICENSE](LICENSE).
